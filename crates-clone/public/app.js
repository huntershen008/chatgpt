// Example records come from upstream CrateLists.stories.svelte, not live rankings.
const groups = [
  ['New Crates','crates?sort=new',[['new-crate-1','0.1.0'],['new-crate-2','0.2.0'],['new-crate-3','0.1.0']]],
  ['Most Downloaded','crates?sort=downloads',[['serde','↓ 1M'],['tokio','↓ 1M'],['rand','↓ 1M']]],
  ['Just Updated','crates?sort=recent-updates',[['updated-crate-1','2.0.0'],['updated-crate-2','1.5.0'],['updated-crate-3','3.0.0-beta.1']]],
  ['Most Recent Downloads','crates?sort=recent-downloads',[['syn','↓ 1M'],['quote','↓ 1M'],['proc-macro2','↓ 1M']]],
  ['Popular Keywords','keywords',[['async','5,000 crates'],['http','3,500 crates'],['cli','2,800 crates']]],
  ['Popular Categories','categories',[['Command-line utilities','4,500 crates','command-line-utilities'],['Web programming','3,800 crates','web-programming'],['Development tools','3,200 crates','development-tools']]],
];
const lists = document.querySelector('#lists');
for (const [title, path, rows] of groups) {
  const section = document.createElement('section');
  const heading = document.createElement('h2');
  const link = document.createElement('a');
  link.href = 'https://crates.io/' + path;
  link.textContent = title;
  heading.append(link);
  const list = document.createElement(path === 'keywords' || path === 'categories' ? 'ul' : 'ol');
  list.className = 'list';
  for (const [name, value, slug] of rows) {
    const isGroup = path === 'keywords' || path === 'categories';
    const li = document.createElement('li');
    const box = document.createElement('a');
    box.className = 'box';
    box.href = 'https://crates.io/' + (isGroup ? path : 'crates') + '/' + encodeURIComponent(slug || name);
    const left = document.createElement('div'); left.className = 'left';
    const label = document.createElement('div'); label.className = 'title'; label.textContent = name;
    const sub = document.createElement('div'); sub.className = 'subtitle'; sub.textContent = isGroup ? value : name + ' is a useful Rust crate'; sub.title = sub.textContent;
    const trailing = document.createElement('span'); trailing.className = 'trailing'; trailing.textContent = isGroup ? '›' : value;
    left.append(label, sub); box.append(left, trailing); li.append(box); list.append(li);
  }
  section.append(heading, list); lists.append(section);
}
const search = document.querySelector('#search');
document.addEventListener('keydown', event => {
  if (event.ctrlKey || event.altKey || event.metaKey || event.target.closest('input, textarea, select, [contenteditable]')) return;
  if (['s','S','/'].includes(event.key)) {event.preventDefault();search.focus();}
});
const theme = document.querySelector('#theme');
function setTheme(value) {
  document.documentElement.dataset.colorScheme = value === 'system' ? (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : value;
}
try {theme.value = localStorage.getItem('crates-clone-theme') || 'light';} catch {}
setTheme(theme.value);
theme.addEventListener('change', () => {setTheme(theme.value);try {localStorage.setItem('crates-clone-theme',theme.value);} catch {}});
matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {if(theme.value === 'system') setTheme('system');});
