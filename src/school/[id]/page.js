import { useParams } from 'react-router-dom';
export default function School(props) {
    const { id } = useParams(); // Извлекаем id из параметров URL// Проверяем значение id
    // Функция для поиска школы по id
    const getSchoolById = (id) => {
        const foundSchool = props.data.find(school => school.id == id);
        return foundSchool;
    }

    // Получаем информацию о школе по id
    const school = getSchoolById(id);
 

    return (
      <div>
            {school ? (
                <>
                    <h1>School Name: {school.name}</h1>
                    <p>Description: {school.description}</p>
              
                </>
            ) : (
                <p>School not found</p>
            )}
        </div>
    );
  }