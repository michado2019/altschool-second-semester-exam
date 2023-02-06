import './Loading.css'

export const NoBlog = () => {
    return (
        <div className="noBlog-wrapper">
            <h2>No Blog yet</h2>
            <p>Sign in!</p>
        </div>
    )
}

export const Loading = () => {
    return(
        <div className="loading">
            <h2>Loading....</h2>
        </div>
    )
}
