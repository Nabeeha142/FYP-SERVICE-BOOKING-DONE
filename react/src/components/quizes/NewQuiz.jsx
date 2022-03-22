import React from "react";
import { Grid,Button,TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import quizService from "../../services/QuizesService";


const useStyles = makeStyles((theme) => ({
  fields: {  right: theme.spacing(-10),},
  addBtn:{
    marginTop: 30,
    right: theme.spacing(-10)
  }
}));


const NewQuiz = (props) => {
  
  const [coursename, setCoursename] = React.useState("");
  const [coursecode, setCoursecode] = React.useState("");
  const [section, setSection] = React.useState("");
  const [quiznumber, setQuiznumber] = React.useState("");
  const [date, setDate] = React.useState("");
  const [syllabus, setSyllabus] = React.useState("");
  
  const style = useStyles();


  return (
    <Grid container spacing={3}>
{/* ADD NEW Quiz HEADING*/}
      <Grid item xs={12}> <h1>Booking Form</h1> </Grid>

 {/*TEXT FIELD : QUIZ NUMBER*/}
 <TextField label="Service Code" fullWidth className={style.fields}
       value={quiznumber}
       onChange={(e) => {
         setQuiznumber(e.target.value);
       }}
      
      />


{/*TEXT FIELD : COURSE-CODE*/}
      <TextField label="Contact Number" fullWidth className={style.fields}
       value={coursecode}
       onChange={(e) => {
         setCoursecode(e.target.value);
       }}
      
      />

{/*TEXT FIELD : COURSE-NAME*/}
<TextField label="Requested Date" fullWidth className={style.fields}
       value={coursename}
       onChange={(e) => {
         setCoursename(e.target.value);
       }}
      
      />


 {/*TEXT FIELD : SECTION*/}
      <TextField label="Requested Time" fullWidth className={style.fields}
       value={section}
       onChange={(e) => {
         setSection(e.target.value);
       }}
      
      />
    


 {/*TEXT FIELD : SYLLABUS*/}
 <TextField label="Email Id" fullWidth className={style.fields}
       value={syllabus}
       onChange={(e) => {
         setSyllabus(e.target.value);
       }}
      
      />

 {/*TEXT FIELD : Date*/}
 <TextField label="No.of Clients" fullWidth className={style.fields}
       value={date}
       onChange={(e) => {
         setDate(e.target.value);
       }}
      
      />

 {/*BUTTON : ADD Quiz*/}
      <Button 
      variant="contained" 
      color="primary" 
      className={style.addBtn}
      onClick={(e) => {
          
            quizService.addQuiz
            ({coursecode,coursename,section,quiznumber,date,syllabus})
            .then((data)=>{
              console.log(data);
              props.history.push("/quizes");

            })
            .catch((err)=>{
              console.log(err);
            });
          }}
          >
      Send Booking Request
      </Button>
     </Grid>
  );
};

export default NewQuiz;