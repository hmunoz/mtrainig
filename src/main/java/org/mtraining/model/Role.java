package org.mtraining.model;

public enum Role {
    ENTRENADOR("Entrenador"),
    NUTRICIONISTA("Nutricionista"),
    ATLETA("Atleta");

    private final String label;

    private Role(String label) {
        this.label = label;
    }

    public String toString() {
        return this.label;
    }
}