const { spawn } = require('child_process');

// Start the Next.js server
const nextServer = spawn('npm', ['run', 'start-next'], { stdio: 'inherit', shell: true });

nextServer.on('close', (code) => {
    if (code === 0) {
        // Once Next.js server is closed, start the Express server
        const expressServer = spawn('npm', ['run', 'start-express'], { stdio: 'inherit', shell: true });
    } else {
        console.error(`Next.js server exited with code ${code}`);
    }
});