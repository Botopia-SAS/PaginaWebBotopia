import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Astronauta(props) {
  const { nodes, materials } = useGLTF('/models/Astronauta.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Guante.geometry}
        material={materials.material_2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_100.geometry}
        material={materials.material_0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_103.geometry}
        material={materials.material_1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_106.geometry}
        material={materials.material_2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_99.geometry}
        material={materials.material_0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Visor.geometry}
        material={materials.material_2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Zapatos.geometry}
        material={materials.material_2}
      />
    </group>
  )
}

useGLTF.preload('/models/Astronauta.glb')