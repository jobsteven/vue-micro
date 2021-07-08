import {
  pushScopeId as n,
  popScopeId as t,
  openBlock as o,
  createBlock as e,
  withScopeId as c,
  resolveComponent as d,
  Fragment as r,
  createVNode as a,
  createTextVNode as s
} from 'vue';
const l = {},
  u = c('data-v-386667cd');
n('data-v-386667cd');
const m = { class: 'myword' };
t();
const p = u((n, t, c, d, r, a) => (o(), e('span', m, ' A')));
(l.render = p), (l.__scopeId = 'data-v-386667cd');
const i = {
    id: 'app01',
    components: { A: l },
    data: () => ({ count: 1 }),
    methods: { increment() {} }
  },
  v = s(' from vitelearn '),
  f = a('hr', null, null, -1);
i.render = function (n, t, c, s, l, u) {
  const m = d('A');
  return o(), e(r, null, [v, f, a(m)], 64);
};
export default i;
