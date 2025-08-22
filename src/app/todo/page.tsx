import TodoList from "../_components/TodoListApp";



export default function Todo() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <TodoList />
        </div>
    )
}