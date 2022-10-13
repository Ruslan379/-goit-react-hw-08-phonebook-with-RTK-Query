const styles = {
    container: {
        minHeight: 'calc(100vh - 50px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#ff8989"

    },
    title: {
        fontWeight: 500,
        fontSize: 48,
        textAlign: 'center',
    },
};

export default function Home() {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>
                Welcome to the HW-8 (with RTK Query){' '}
                <span role="img" aria-label="Greeting icon">
                    💁
                </span>
            </h1>
        </div>
    );
}
