import { taskApi } from '@/api/taskApi';


import { onMounted, ref } from 'vue';

export const useTodoList = () => {
  const originalTasks = ref([]);
  const task = ref(originalTasks);
  

  const getTasks = async () => {
    const res = await taskApi.get('/4');

    const taskArray = res.data.tasks.map((task) => {
      return {
        title: task.title,
        id: task.id,
        description: task.description,
      };
    });
    return taskArray;
  };

  const addTask = async () =>{
    task.value.unshift({ title:task.value.title , description: task.value.description })
    
    const res = await taskApi.post('/4',task.value[0]);

    task.value = await getTasks();
    task.value.reverse();


    task.value.title='';
    task.value.description =''

    

  }


  const deleteTask = async(task_id) =>{
    console.log(task_id)
    const res = await taskApi.delete(`4/${task_id}`)

    task.value = await getTasks();
    task.value.reverse();

  }





  onMounted(async () => {
    task.value = await getTasks();
    task.value.reverse();
    console.log(task.value);
  });

  return {
    task,
    addTask,
    deleteTask,
    
  };
};
