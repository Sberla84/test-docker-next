async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        cache: "no-store",
    });
    const data = await res.json();

    return data;
}

export default async function Server() {
    const data = await getData();

    return (
        <div>
            <h1>Server Page</h1>

            <div>
                <ul>
                    {data.map((user: { id: number; name: string }) => (
                        <li key={user.id}>{`${user.name}`}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
