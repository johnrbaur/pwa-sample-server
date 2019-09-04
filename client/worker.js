console.log('Loaded service worker!');

self.addEventListener('push', ev => {
  const data = ev.data.json();
  const { title, ...contents } = data;
  console.log('Got push', data);
  self.registration.showNotification(title, contents);
});
