const getStudent = () => {
    let student = { name: "John", age: 23, courses: ["Maths", "Biology", "English"] };
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(student), 3000)
    });
};

getStudent().then(res => console.log(res));