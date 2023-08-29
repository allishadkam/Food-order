import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem';
import { useEffect, useState } from 'react';


const AvailableMeals = () => {

  const[mealsList,setmealList]=useState([]);
  const[isLoading,setisLoading]=useState(true);
  const[httpError,sethttperror]=useState(null);

  useEffect(()=>{

    const fetchdata = async()=>{
    setisLoading(true);
    const response= await fetch("https://http-test-5cfcc-default-rtdb.firebaseio.com/meals.json");
    
    if(!response.ok){
      throw new Error("something went wrong !!!");
      
    };

    const data=await response.json();
    
    const meals=[];

    for(const key in data){
      meals.push({
        id:key,
        price:data[key].price,
        description:data[key].description,
        name:data[key].name
      })
    };
    setmealList(meals);
    setisLoading(false);
    };
    fetchdata().catch(error=>{
      setisLoading(false);
      console.log(error)
      sethttperror(error.message)
    }); 
  },[])
  
  const rendermeals = mealsList.map((meal) => <MealItem id={meal.id} key={meal.id} price={meal.price} description={meal.description} name={meal.name}/>);

  return (
    <section className={classes.meals}>
      <Card>
        {!isLoading&&httpError&&<p>{httpError}</p>}
        {isLoading?<p>loading...</p>:<ul>{rendermeals}</ul>}
      </Card>
      
    </section>
  );
};

export default AvailableMeals;