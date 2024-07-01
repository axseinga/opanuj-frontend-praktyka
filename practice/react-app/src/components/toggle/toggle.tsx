import './toggle.scss';

type ToggleAppModeProps = {
  setGameState: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ToggleAppMode = ({ setGameState }: ToggleAppModeProps) => {
  return (
    <div className="toggle-app-mode">
      Finder
      <label>
        <input type="checkbox" onChange={() => setGameState((prev) => !prev)} />
        <span>&nbsp;</span>
      </label>
      Game
    </div>
  );
};
