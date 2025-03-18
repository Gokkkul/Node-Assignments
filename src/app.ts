const express = require('express');

const adminRoutes = require('./routes/admin.routes');
const studentRoutes = require('./routes/student.routes');
const app = express();

app.use(express.json())

app.use('/admin', adminRoutes);
app.use('/student', studentRoutes);

app.listen(3000, () => {
    console.log("Server started at port 3000...!");
})

