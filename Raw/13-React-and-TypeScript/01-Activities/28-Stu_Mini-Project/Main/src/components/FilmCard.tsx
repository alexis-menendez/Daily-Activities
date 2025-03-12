import type React from 'react';
import type Film from '../utils/interfaces/Film.interface';
import { IoEyeOutline } from 'react-icons/io5';
import { ImCross } from 'react-icons/im';
import { CgPlayListAdd } from 'react-icons/cg';

type FilmCardProps = {
  currentFilm: Film;
  addToWatchList?: (() => void) | null;
  addToSeenItList?: (() => void) | null;
  onWatchList?: boolean | null;
  onSeenItList?: boolean | null;
  removeFromStorage?:
    | ((
        e: React.MouseEvent<SVGSVGElement, MouseEvent>,
        currentlyOnWatchList: boolean | null | undefined,
        currentlyOnSeenItList: boolean | null | undefined,
        title: string | null
      ) => void)
    | null;
};

const FilmCard = ({
  currentFilm,
  addToWatchList,
  addToSeenItList,
  onWatchList,
  onSeenItList,
  removeFromStorage,
}: FilmCardProps) => {
  return (
    <>
      {currentFilm?.Title ? (
        <section className='filmCard'>
          <figure>
            <img src={`${currentFilm.Poster}`} alt={`${currentFilm.Title}`} />
          </figure>
          <article className='details'>
            <h2>{currentFilm.Title}</h2>
            <p>
              <strong>Directed By:</strong> {currentFilm.Director}
            </p>
            <p>
              <strong>Starring:</strong> {currentFilm.Actors}
            </p>
            <p>
              <strong>Released:</strong> {currentFilm.Released}
            </p>
            <p>
              <strong>Genre:</strong> {currentFilm.Genre}
            </p>
          </article>
          <article className='plot'>
            <p>
              <strong>Plot:</strong> {currentFilm.Plot}
            </p>
          </article>
          {onWatchList || onSeenItList ? (
            <aside className='icons'>
              <ImCross
                style={{ fontSize: '40px', cursor: 'pointer' }}
                onClick={(e: React.MouseEvent<SVGSVGElement, MouseEvent>) =>
                  removeFromStorage?.(
                    e,
                    onWatchList,
                    onSeenItList,
                    currentFilm.Title
                  )
                }
              />
            </aside>
          ) : (
            <aside className='icons'>
              <CgPlayListAdd
                style={{ fontSize: '50px', cursor: 'pointer' }}
                onClick={() => addToWatchList?.()}
              />
              <IoEyeOutline
                style={{ fontSize: '50px', cursor: 'pointer' }}
                onClick={() => addToSeenItList?.()}
              />
            </aside>
          )}
        </section>
      ) : (
        <h1 style={{ margin: '16px 0' }}>Please search for a film.</h1>
      )}
    </>
  );
};

export default FilmCard;
