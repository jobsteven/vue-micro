import { h, markRaw } from 'vue';
import { RouterView } from 'vue-router';

let REGISTRY = '';

const Micro = {
  name: 'micro',
  path: ':micro_id',
  component: {
    data() {
      return {
        tip: '',
        micro: null
      };
    },

    computed: {
      micro_id() {
        return this.$route.params.micro_id;
      }
    },

    watch: {
      micro_id: {
        handler: 'microIdChanged',
        immediate: true
      }
    },

    render() {
      return h('div', this.micro ? h(this.micro) : h('span', this.tip));
    },

    methods: {
      microIdChanged() {
        if (!this.micro_id) {
          this.tip = 'micro_id is required.';
        }

        if (this.micro_id) {
          this.micro = this._.appContext.app.component(this.micro_id);
        }

        if (!this.micro) {
          this.loadRemoteMicro();
        }
      },
      loadRemoteMicro() {
        if (this.micro_id && !this.micro) {
          this.tip = 'loading...';
          const resolveMicroURl =
            typeof REGISTRY === 'string' ? `${REGISTRY}/${this.micro_id}` : REGISTRY[this.micro_id];
          import(resolveMicroURl)
            .then((RemoteComponentESM) => {
              const RemoteComponent = RemoteComponentESM.default;
              // register micro
              markRaw(RemoteComponent);

              this.$.appContext.app.component(this.micro_id, RemoteComponent);

              // register routes
              const appRoutes = RemoteComponent.routes;
              if (appRoutes && this.$router) {
                appRoutes.forEach((route) => this.$router.addRoute(Micro.name, route));
              }

              // register done
              this.tip = '';

              // force update
              this.microIdChanged();
            })
            .catch((error) => {
              this.tip = error.message;
            });
        }
      }
    }
  },
  children: [
    {
      name: 'micro_routes',
      path: ':micro_routes+',
      component: {
        data() {
          return {
            tip: ''
          };
        },
        render() {
          return h('span', this.tip);
        },
        mounted() {
          this.$router.replace(this.$route.fullPath).then(() => {
            // micro_routes jumping failure
            if (this.$route.params.micro_routes) {
              this.tip = `404 Not Found ${this.$route.fullPath}`;
            }
          });
        }
      }
    }
  ]
};

export default function useMicro(router, registry, micro_base = '/micro') {
  if (!(router && registry)) {
    throw new Error('router, registry are required.');
  }
  REGISTRY = registry;
  router.addRoute({
    name: 'micro_base',
    path: `${micro_base}`,
    component: {
      render() {
        if (!this.$route.params['micro_id']) {
          return h('span', `MicroURL format is invalid. eg. ${micro_base}/micro_id`);
        }
        return h(RouterView);
      }
    },
    children: [Micro]
  });
}
