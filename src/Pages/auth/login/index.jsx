export default function Login() {
    return (
        <>
            <div ClassName="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" tabindex="-1" role="dialog" id="modalSignin">
                <div ClassName="modal-dialog">
                    <div ClassName="modal-content rounded-4 shadow">
                        <div ClassName="modal-header p-5 pb-4 border-bottom-0">
                            <h1 ClassName="fw-bold mb-0 fs-2">Sign up for free</h1>
                            <button type="button" ClassName="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div ClassName="modal-body p-5 pt-0">
                            <form ClassName="">
                                <div ClassName="form-floating mb-3">
                                    <input type="email" ClassName="form-control rounded-3" id="floatingInput" placeholder="name@example.com"/>
                                        <label for="floatingInput">Email address</label>
                                </div>
                                <div ClassName="form-floating mb-3">
                                    <input type="password" ClassName="form-control rounded-3" id="floatingPassword" placeholder="Password"/>
                                        <label for="floatingPassword">Password</label>
                                </div>
                                <button ClassName="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Sign up</button>
                                <small ClassName="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
                                <hr ClassName="my-4"/>
                                    <h2 ClassName="fs-5 fw-bold mb-3">Or use a third-party</h2>
                                    <button ClassName="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit">
                                        <svg ClassName="bi me-1" width="16" height="16" aria-hidden="true"><use xlink:href="#google" /></svg>
                                        Sign up with Google
                                    </button>
                                    <button ClassName="w-100 py-2 mb-2 btn btn-outline-primary rounded-3" type="submit">
                                        <svg ClassName="bi me-1" width="16" height="16" aria-hidden="true"><use xlink:href="#facebook" /></svg>
                                        Sign up with Facebook
                                    </button>
                                    <button ClassName="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit">
                                        <svg ClassName="bi me-1" width="16" height="16" aria-hidden="true"><use xlink:href="#github" /></svg>
                                        Sign up with GitHub
                                    </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}