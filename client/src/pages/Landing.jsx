import Header from "../components/Header"

export function Landing() {
    return (
        <div className="flex justify-center items-center w-full h-full">
            <Header />
            <main mx>
                <section>
                    <h1 className="text-black">Spark.ia</h1>
                </section>
            </main>
        </div>
    )
}