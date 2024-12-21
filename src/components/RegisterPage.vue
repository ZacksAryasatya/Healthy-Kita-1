<template>
    <div class="d-flex justify-content-center align-items-center vh-100" style="background-color: #f4fdf4;">
        <div class="card shadow-sm" style="width: 24rem; border-radius: 10px;">
            <div class="card-body">
                <h3 class="card-title text-center mb-4">Sign Up</h3>
                <form>
                    <div class="mb-3">
                        <label for="name" class="form-label">Full Name</label>
                        <input type="text" id="name" class="form-control" name="username" placeholder="John Doe" v-model="userData.username"
                            required>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input type="email" id="email" class="form-control"
                            placeholder="youremail@example.com" name="email" v-model="userData.email" required>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" id="password" class="form-control"
                            placeholder="Enter your password" name="password" v-model="userData.password" required>
                    </div>
                    <div class="mb-3">
                        <label for="confirmPassword" class="form-label">Confirm Password</label>
                        <input type="password" id="confirmPassword" class="form-control"
                            placeholder="Confirm password" name="confirmpw" v-model="userData.confirmpw" required>
                    </div>
                    <button type="submit" class="btn btn-success w-100 animate" @click="registerData">Register</button>
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
import axios from 'axios';
import textFile from '!!raw-loader!./file.txt';
export default {
    name: 'RegisterPage',
    data() {
        
        return {
            arr: textFile,
            userData: {
                username: "",
                email: "",
                password: "",
                confirmpw: ""
            }
        };
    },
    methods: {
        registerData() {
            console.log(this.arr);
            const { username, email, password, confirmpw } = this.userData;
            if (!username || !password || !email || !confirmpw){
                alert("Please fill out all required fields.");
                return;
            }
            if (password !== confirmpw) {
                alert("Passwords do not match.");
                return;
            }
            axios.post(`${this.arr}/api/signup/user`, {
                username: username,
                email: email,
                password: password
            })
            .then(function(response) {
                console.log("debugging", response);
            })
            .catch(function(error) {
                console.log(error);
            });   
        }
    },
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