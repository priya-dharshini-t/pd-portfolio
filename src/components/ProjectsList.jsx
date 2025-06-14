// src/components/ProjectsList.jsx
import React from 'react';
import { projects } from '../data/projects';

function ProjectsList() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>My Projects</h1>
      <div style={styles.grid}>
        {projects.map(project => (
          <div key={project.id} style={styles.card}>
            <h2 style={styles.title}>{project.title}</h2>
            <p style={styles.description}>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" style={styles.link}>
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '3rem',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  grid: {
    display: 'flex',
    gap: '7rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'sandybrown',
    padding: '1.5rem',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    width: '300px',
    textAlign: 'left',
    transition: 'transform 0.2s ease',
  },
  title: {
    marginBottom: '0.5rem',
    fontSize: '1.25rem',
    color: '#333',
  },
  description: {
    marginBottom: '1rem',
    color: 'white',
  },
  link: {
    textDecoration: 'none',
    color: '#007bff',
    fontWeight: 'bold',
  },
};

export default ProjectsList;
