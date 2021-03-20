import useBusinesses from "../../hooks/use-businesses";

const Board = () => {
    const data = useBusinesses();

    console.log(data);

    return (
        <section>
            board
        </section>
    )
    
}
export default Board;