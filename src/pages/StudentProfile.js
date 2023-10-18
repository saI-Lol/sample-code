import PersonalStudentInfo from "../components/PersonalStudentInfo"
import NextOfKinInfo from "../components/NextOfKinInfo"
const StudentProfile = () => {
    return ( 
        <div className="container mt-5">
            <div className="row justify-content-center gap-5">
                <div className="col-md-5">
                    <PersonalStudentInfo />
                </div>
                <div className="col-md-5">
                    <NextOfKinInfo />
                </div>
            </div>
        </div>
     );
}
 
export default StudentProfile;