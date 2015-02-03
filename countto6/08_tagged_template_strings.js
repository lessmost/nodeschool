console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function encode(str) {
    return str.replace(/&/g, '&amp;')
        .replace(/'/g, '&#39;')
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}
function html(...args) {
    var strs = args[0],
        subs = args.slice(1),
        rets = [];
    for (var i = 0; i < strs.length; i++) {
        rets.push(strs[i]);
        if (i !== strs.length - 1) {
            rets.push(encode(subs[i]));
        }
    }

    return rets.join('');
}

