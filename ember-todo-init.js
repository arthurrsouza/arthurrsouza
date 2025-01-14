export default function run () {
  const mainContainer = document.querySelector(
    '[data-extension-ember-todo-container]'
  )

  const appContainer = document.createElement('div')
  appContainer.id = 'todo-container'

  mainContainer?.appendChild(appContainer)

  const app = new window.MyEmbeddedApp(appContainer)
  app.start()
}
