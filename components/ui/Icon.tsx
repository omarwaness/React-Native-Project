import { View } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';

type IconProps = {
  name: string;
  size?: number;
  color?: string;
  focused?: boolean;
};

export default function Icon({ name, size = 22, color = "black", focused = false }: IconProps) {
  return (
    <View>
      <Feather name={name as any} size={size} color={color} />
    </View>
  )
}