let users = {
    name: "Borja",
    pass: "1234"
};

const miFunsion = () => {

        localStorage.setItem(JSON.stringify([users]));
    
}
miFunsion()
