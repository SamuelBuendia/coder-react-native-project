import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('events.db')

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS events (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, date TEXT NOT NULL);',
        [],
        () => resolve(),
        (_, err) => reject(err)
      )
    })
  })
  return promise
}

export const createEvent = (title, date) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO events (title, date) VALUES (?, ?);',
        [title, date],
        (_, result) => {
          resolve(result)
        },
        (_, err) => reject(err)
      )
    })
  })

  return promise
}

export const deleteEvent = (id) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `DELETE FROM events WHERE id=${id}`,
        [],
        (_, result) => {
          resolve(result)
        },
        (_, err) => {
          reject(err)
        }
      )
    })
  })
  return promise
}

export const getEvents = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM events',
        [],
        (_, result) => {
          resolve(result)
        },
        (_, err) => {
          reject(err)
        }
      )
    })
  })
  return promise
}
