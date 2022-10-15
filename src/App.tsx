import { Envelope, Lock } from 'phosphor-react';

import { TextInput } from './components/TextInput';
import { Checkbox } from './components/Checkbox';
import { Heading } from './components/Heading';
import { Button } from './components/Button';
import { Text } from './components/Text';

import reactImg from './assets/react.svg';
import './styles/global.css';

export function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex items-center flex-col justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <img src={reactImg} alt="react-logo" className="w-[105px] h--[93px]" />

        <Heading size='lg' className="mt-4">Ignite Lab</Heading>
        <Text size='lg' className="text-gray-400 mt-1">Faça Login e comece a usar!</Text>
      </header>

      <form className="flex flex-col gap-4 items-stretch mt-12 w-full max-w-[400px]">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>

          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>

            <TextInput.Input type='email' id='email' placeholder='Johndoe@example.com' />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>

          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>

            <TextInput.Input type='password' id='password' placeholder='********' />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id='remember' />
          <Text size='sm' className="text-gray-200">Lembrar de mim por 30 dias</Text>
        </label>

        <Button type='submit' className="mt-4">Entrar na plataforma</Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <a href="/" className="text-gray-400 underline text-xs hover:text-gray-200">Esqueceu sua senha?</a>
        <a href="/" className="text-gray-400 underline text-xs hover:text-gray-200">Não possui conta? Crie uma agora!</a>
      </footer>
    </div>
  )
}


