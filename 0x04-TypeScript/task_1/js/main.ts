interface Teacher {
    readonly firstName: string,
    readonly lastName: string
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string
};

interface Directors extends Teacher {
    numberOfReports: number
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

function printTeacher(firstname: string, lastname: string) {
    return `${firstname.charAt(0)}. ${lastname}`
}

