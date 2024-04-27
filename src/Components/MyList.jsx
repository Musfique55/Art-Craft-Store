
const MyList = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        fetch(`http://localhost:5000/craft/${email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default MyList;