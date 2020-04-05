const importAll =  (r) => r.keys().forEach(r);

importAll(require.context('./sass', true, /\.scss$/));
importAll(require.context('./blocks', true, /\.scss$/));
importAll(require.context('./pages', true, /\.scss$/));
