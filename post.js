const { spawn } = require("child_process");

const subprocess = spawn(process.env.INPUT_POST, { stdio: "inherit", shell: true });
subprocess.on("exit", (exitCode) => {
  process.exitCode = exitCode;
});
