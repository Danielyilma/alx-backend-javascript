const coutStudents = require("./3-read_file_async");

coutStudents(process.argv[2]).catch(() => process.exit(1));
