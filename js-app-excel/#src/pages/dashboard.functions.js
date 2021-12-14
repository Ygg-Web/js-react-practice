function toHTML(state) {
    return `
  <li class="db__record">
    <a href="#">${state.title}</a>
    <strong>12.12.2021</strong>
  </li>
  `
}

function getAllKeys() {
    const keys = []
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
            // console.log('key', key)
        if (!key.includes('excel')) {
            continue
        }
        keys.push(key)
    }
    return keys
}


export function createRecordsTable() {
    const keys = getAllKeys()

    console.log('keys', keys)

    if (!keys.length) {
        return `<p>Пока не создано ни одной таблицы</p>`

    }

    return `
      <div class="db__list-header">
        <span>Название</span>
        <span>Дата открытия</span>
      </div>

      <ul class="db__list">
        ${keys.map(toHTML).join('')}
      </ul>
  `
}