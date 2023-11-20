function About(isLoggedIn){

    return(
        <>
         {
           isLoggedIn ? <h1>About Page</h1> : <h1>Not Allowed</h1>
        }
        </>
    )
}

export default About