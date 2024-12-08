

import Staffcard from './Staffcard'
const Stafflist = () => {


    const employees = [
        {
            firstName: "John",
            lastName: "Doe",
            position: "Software Developer",
            DOB: "1990-05-14",
            profilePicture: "https://static.vecteezy.com/system/resources/previews/010/359/290/non_2x/headshot-of-young-lovely-woman-keeps-hands-on-neck-has-european-appearance-happy-to-hear-pleasant-words-wears-casual-sweater-isolated-over-blue-background-human-face-expressions-concept-free-photo.JPG"
        },
        {
            firstName: "Jane",
            lastName: "Smith",
            position: "Project Manager",
            DOB: "1985-08-22",
            profilePicture: "https://cdn.pixabay.com/photo/2018/10/29/21/46/human-3782189_640.jpg"
        },
        {
            firstName: "Sam",
            lastName: "Brown",
            position: "UI/UX Designer",
            DOB: "1992-03-11",
            profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqVyiI1XClbT2Ue-7CGVAp8sKoqe_068R9zw&s"
        },
        {
            firstName: "Emily",
            lastName: "Davis",
            position: "Quality Analyst",
            DOB: "1988-07-19",
            profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBzYI2b8e_FTfrjVbYq7frtNhNn7_whizWgzyWglGdptidF-1Gxz_OtBbvqhA4L07tZAc&usqp=CAU"
        },
        {
            firstName: "Michael",
            lastName: "Johnson",
            position: "Backend Developer",
            DOB: "1991-10-02",
            profilePicture: "https://media.istockphoto.com/id/1196391449/photo/portrait-of-african-woman.jpg?s=612x612&w=0&k=20&c=b-hwtJGyg5Y-hwG-9id9D3hb71TmaqyDlfU-Ps3GA2s="
        },
        {
            firstName: "Sarah",
            lastName: "Wilson",
            position: "HR Specialist",
            DOB: "1986-12-15",
            profilePicture: "https://t4.ftcdn.net/jpg/02/46/14/93/360_F_246149382_KHkt8Mw8pptlmVuiqmhavvHBC4SEqBu1.jpg"
        },
        {
            firstName: "David",
            lastName: "Martinez",
            position: "Data Scientist",
            DOB: "1993-04-08",
            profilePicture: "https://t4.ftcdn.net/jpg/03/02/94/53/360_F_302945354_dqIiUiITKpard7fBVKDLtffIqnkDbyo4.jpg"
        },
        {
            firstName: "Olivia",
            lastName: "Taylor",
            position: "Marketing Strategist",
            DOB: "1989-09-29",
            profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhYYMbRqrF1XkrDg9agmPbEGiBhfhJlzr6eqT0Ou6zLlgpr7SHEpw0KE8XEogyLoh7hBA&usqp=CAU"
        },
        {
            firstName: "James",
            lastName: "Anderson",
            position: "Business Analyst",
            DOB: "1994-01-20",
            profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp8IK7b7UTRVeQFnDQup5ZH1LcpiztAF5OvGTYCfy3TsxCmUf90Aen1boB-5Sjoj_ZbJk&usqp=CAU"
        },
        {
            firstName: "Sophia",
            lastName: "Lee",
            position: "Full Stack Developer",
            DOB: "1995-06-25",
            profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCrsQeSNHUt0IHR7oyeNChCSWV682KLtb81N1TOLe2U-8qeSW2AeNED_F9FMWZbmOQwLg&usqp=CAU"
        }
    ];
  return (
    <div>
    {employees.map((employee) => (
        <Staffcard 
        key={employee.id} 
        firstName={employee.firstName} 
        lastName={employee.lastName} 
        position={employee.position} 
        DOB={employee.DOB} 
        profilePicture={employee.profilePicture}/>
        
    ))}

    </div>

  )
}

export default Stafflist
