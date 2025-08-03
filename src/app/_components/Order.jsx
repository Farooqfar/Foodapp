

export default function Order() {
    return (
        <main>
            <form>
                <div>
                    <label>Full Name</label>
                    <input type="text" name="fullname" />
                </div>
                <div>
                    <label>Food</label>
                    <input type="text" name="food" />
                </div>
                <div>
                    <label>Address</label>
                    <input type="text" name="address" />
                </div>
                <div>
                    <label>Phone no.</label>
                    <input type="number" name="phone" />
                </div>
            </form>
        </main>
    )
}
