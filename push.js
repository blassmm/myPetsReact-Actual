import { exec } from 'child_process';
import inquirer from 'inquirer';

// Función para ejecutar un comando en la terminal
const runCommand = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(`Error: ${stderr || error.message}`);
      }
      resolve(stdout);
    });
  });
};

// Función principal
const main = async () => {
  try {
    // Preguntar por el mensaje de commit
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'commitMessage',
        message: '¿Qué mensaje quieres poner en el commit?',
        default: 'minor updates' // Puedes poner un valor por defecto
      }
    ]);

    const { commitMessage } = answers;

    // Ejecutar los comandos de Git
    console.log('Ejecutando git add, commit y push...');

    await runCommand('git add .');
    await runCommand(`git commit -m "${commitMessage}"`);
    await runCommand('git push');

    console.log('¡Comandos ejecutados con éxito!');

  } catch (error) {
    console.error('Error:', error);
  }
};

main();
