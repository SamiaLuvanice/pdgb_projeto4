const tasks = [
    { id: 1, title: "Concluir projeto", completed: false, priority: "alta" },
    { id: 2, title: "Ler emails", completed: true, priority: "média" },
    { id: 3, title: "Participar da reunião", completed: false, priority: "alta" },
    { id: 4, title: "Comprar mantimentos", completed: true, priority: "baixa" },
    { id: 5, title: "Estudar JavaScript", completed: false, priority: "média" }
];

const taskWithId10Index = tasks.findIndex(task => task.id === 10);
if (taskWithId10Index === -1) {
  console.log(" Tarefa com id=10 não encontrada.");
} else {
  console.log("Posição da tarefa com id=10:", taskWithId10Index);
}