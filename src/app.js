export function greeting(name = 'Bora AI Studio') { return `${name} 준비 완료!`; }

if (typeof document !== 'undefined') {
  document.querySelector('#check')?.addEventListener('click', () => {
    document.querySelector('#result').textContent = greeting();
  });
}
