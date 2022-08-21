import { validationResult } from "express-validator";
import authService from "../services/authService";
import userService from "../services/userService";

let getLogin = (req, res) => {
    return res.render("auth/login.ejs", {
        error: req.flash("error"),
    });
};

let getRegister = (req, res) => {
    return res.render("auth/register.ejs");
};

let postRegister = async (req, res) => {
    try {
        let user = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword,
        };
        let message = await userService.createNewUser(user);
        console.log(message);
        return res.redirect("/login");
    } catch (error) {
        console.log(error);
    }
    
};

let verifyAccount = async (req, res) => {
    let errorArr = [];
    let successArr = [];
    try {
        let verifySuccess = await auth.verifyAccount(req.params.token);
        successArr.push(verifySuccess);
        req.flash("success", successArr);
        return res.redirect("/login");

    } catch (error) {
        console.log(error);
    }
};

let getLogout = (req, res) => {
    req.session.destroy(function (err) {
        console.log(err);
        return res.redirect("/login");
    });

};

let checkLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return res.redirect("/login");
    }
    next();
};

let checkLoggedOut = (req, res, next) => {
    if (req.isAuthenticated()) {
        return res.redirect("/users");
    }
    next();
};
module.exports = {
    getLogin: getLogin,
    getRegister: getRegister,
    postRegister: postRegister,
    verifyAccount: verifyAccount,
    getLogout: getLogout,
    checkLoggedIn: checkLoggedIn,
    checkLoggedOut: checkLoggedOut
};
