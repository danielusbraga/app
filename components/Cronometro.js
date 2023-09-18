import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Cronometro = () => {
  const [horas, setHoras] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [segundos, setSegundos] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [lastTime, setLastTime] = useState(null);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setSegundos(segundos => segundos + 1);
      }, 1000);
    } else {
      clearInterval(timer);
      if (segundos > 0) {
        setLastTime(`${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`);
      }
    }

    return () => clearInterval(timer);
  }, [isRunning, segundos]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setHoras(0);
    setMinutos(0);
    setSegundos(0);
    setIsRunning(false);
    setLastTime(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{`${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`}</Text>
      <TouchableOpacity style={styles.button} onPress={handleStartStop}>
        <Text style={styles.buttonText}>{isRunning ? 'Parar' : 'Iniciar'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleReset}>
        <Text style={styles.buttonText}>Reiniciar</Text>
      </TouchableOpacity>
      {lastTime && <Text style={styles.lastTimeText}>Último tempo medido: {lastTime}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  timerText: {
    fontSize: 48,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  lastTimeText: {
    marginTop: 20,
    fontSize: 16,
  },
});

export default Cronometro;
