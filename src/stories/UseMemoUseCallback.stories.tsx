import React, { useCallback, useMemo, useState } from 'react';

export default {
    title: 'UseMemoUseCallback demo',
}


export const DifficultCountingExample = () => {

    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }


    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))} />
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)} />
        <hr />
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>

    </>
}

const UsersSecret = (props: { users: Array<string> }) => {
    debugger
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)

    }</div>
}
const Users = React.memo(UsersSecret)

export const HelpsForReactMemo = () => {
    console.log("HelpsForReactMemo")
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Yana', 'Olya', 'Kris'])

    const newArray = useMemo(() => {
        const newArray = users.filter(u => u.toLowerCase().indexOf('a') > -1)
        return newArray
    }, [users])

    const addUser = () => {
        const newUsers = [...users, 'Masha' + new Date().getTime()]
        setUsers(newUsers)
    }
    return <>
        <button onClick={() => setCounter(counter + 1)}></button>
        <button onClick={addUser}>add user</button>
        {counter}
        <Users users={users} />
    </>

}

export const LikeUseCallbackMemo = () => {
    console.log("HelpsForReactMemo")
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML'])


    const memoizedAddBook = useMemo(() => {
        return () => {
            const newBooks = [...books, 'Angular' + new Date().getTime()]
            setBooks(newBooks)
        }
    }, [books])

    const memoizedAddBook2 = useCallback(() => {
        console.log(books)
        const newBooks = [...books, 'Angular' + new Date().getTime()]
        setBooks(newBooks)
    }, [books])


    return <>
        <button onClick={() => setCounter(counter + 1)}></button>
        {counter}
        <Books addBook={memoizedAddBook2} />
    </>

}
type BooksSecretPropsType = {
    addBook: () => void
}

const BooksSecret = (props: BooksSecretPropsType) => {
    debugger
    console.log('BooksSecret')
    return <div>
        <button onClick={props.addBook}>add book</button>
    </div>
}
const Books = React.memo(BooksSecret)
