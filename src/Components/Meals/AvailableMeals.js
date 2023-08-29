import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem';


const AvailableMeals = () => {

  console.log("component runs")
  const mealsList =[] /*DUMMY_MEALS.map((meal) => <MealItem id={meal.id} key={meal.id} price={meal.price} description={meal.description} name={meal.name}/>);*/

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
      
    </section>
  );
};

export default AvailableMeals;