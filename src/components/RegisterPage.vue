<template>
    <div class="d-flex justify-content-center align-items-center vh-100" style="background-color: #f4fdf4;">
        <div class="card shadow-sm" style="width: 24rem; border-radius: 10px;">
            <div class="card-body">
                <h3 class="card-title text-center mb-4">Sign Up</h3>
                <form>
                    <div class="mb-3">
                        <label for="name" class="form-label">Full Name</label>
                        <input type="text" id="name" class="form-control" placeholder="John Doe"
                            required>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input type="email" id="email" class="form-control"
                            placeholder="youremail@example.com" required>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" id="password" class="form-control"
                            placeholder="Enter your password" required>
                    </div>
                    <div class="mb-3">
                        <label for="confirmPassword" class="form-label">Confirm Password</label>
                        <input type="password" id="confirmPassword" class="form-control"
                            placeholder="Confirm password" required>
                    </div>
                    <button type="submit" class="btn btn-success w-100 animate">Register</button>
                </form>
                <div class="text-center mt-3">
                    <p id="login1">Already have an account? </p><router-link to="/login"
                            class="text-success text-decoration-none" id="login">Sign in here</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import textFile from '!!raw-loader!./file.txt';
export default {
    name: 'RegisterPage',
    data() {
        return {
            arr: textFile
        }
    }
}
</script>

<style scoped>
#login1 {
    color: black;
    text-decoration: none;
    font-size: 14px;
    margin-top: 5px;
    display: inline-block;
    margin-bottom: 10px;
    margin-left: 2px;
    margin-right: 5px;
}

#login {
    font-size: 14px;
    display: inline-block;
    transition: color 0.3s ease-in-out;
    margin-bottom: 10px;
}

#login:hover {
    color: #357ab8;
}

.animate {
    transition: all 0.3s ease;
}

.animate:hover {
    transform: scale(1.05);
}

.animate:active {
    transform: scale(0.95);
}
</style>