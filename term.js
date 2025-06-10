const terminal = new Terminal();
const fitAddon = new FitAddon.FitAddon();
terminal.loadAddon(fitAddon);
terminal.open(document.getElementById('terminal-container'));
fitAddon.fit();

const socket = io('http://localhost:3000/admin', {
  query: {
      admin: 'true'
  }
}
socket.on('connect', () => {
            console.log('Connected to server');
});


  terminal.onData((data: string) => {
            socket.emit('terminal_input',);
  });

  socket.on('terminal_output', (data: string) => {
            terminal.write(data);
  });

  window.addEventListener('resize', () => {
            fitAddon.fit();
          const size = {
            cols: terminal.cols,
          rows: terminal.rows,
    };
          socket.emit('resize', size);
  });
