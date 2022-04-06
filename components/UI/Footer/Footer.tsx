import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Flex,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Image
} from '@chakra-ui/react';
import { FaGithub, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { ReactNode } from 'react';
import NextLink from 'next/link'
import ScrollAnimation from 'react-animate-on-scroll';

const Logo = (props: any) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="157" height="100" viewBox="0 0 157 100">
      <image width="157" height="100" href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWoAAADnCAYAAAA3gRxRAAAf5klEQVR4nO2dC9hVVZnH/4ebchFBUIFIw7ykaUIWeCnNWzo6iuYF5JKaTjXVM5NTTbfpapOl00VzHKesvGQSIqBZZk1mZJqafCRe8EYCCgooKIrI7Ztn2Xvy42Pvc87eZ613Xfb/9zzf8+jHOetde519/t/a73ovtU6M7gQhhJBg6cGPhhBCwoZCTQghgUOhJoSQwKFQE0JI4FCoCSEkcCjUhBASOL2aTK/GD5AQQlTIDZXmjpoQQgKHQk0IIYFDoSaEkMChUBNCSOBQqAkhJHAo1IQQEjgUakIICRwKNSGEBA6FmhBCAodCTQghgUOhJoSQwGlW64MQQqqC0cORjq/1KQAbi76pXaHuB+CyNscoQweAiz3YLYMpbHUpgP7KducCuKTgezQ+z9nyE8x8apjX6nys0YnRXwWwi0MTCwB8o80xtvfwPbsCwB3KNusYkf6rYxujADxZ9E3tCnUfAGe2OUYZTgPwIwBrPNguymEAPuLB7qASQq3xeT5ZQKhDm49NTgSwv8Pxf29BqE/38P3u71GogyVWH7XZaU0MYB6tcHb4UyQkkykeluVE2WSQLsR8mHhuAHNoxnYATg17ioRkYh7RD/WwNH1kJ0+6ELNQjwWwXwDzaMTpsvsnJDZ87KbrvJ93y5bEHp73gQDm0Ai6PUisTPU470MA7MY753ViF2pzM20TwDyy2FNuOEJi4yAAe3ies88/FMERu1APATA+gHlkcVZ4UyKkJUIQSZ+ul+BIITMxxEPFnp7CFglpF/OEOiGAVdxddvaVB4kI9VEAdg1gHl05GsCIcKZDSMscB2CHQJaL7g8hBaGuBXhoF/ohJyF5hBRxMTHgMyhVUinKdHZA17JDwH5zQhphznyOD2iFBssOv/KkItS7iLshBCZJ0D4hsWF8070Dm3PlY6qRWJnTUA4VGTtNYiVEUQzJZ+6NlITauBuGep7D2wC83fMcCCmDifsfF+DKmafTEKJQvJKSUPcO4JSYu2kSKyFHWFQ++iO1Di/neLTdm0H6JFJqgYthCJmSXklNqN8K4EBPtk8IwPVCSBkODTAXoTuV3gSl2DPR16EiU8ZJrMTgWpgqO/9KkqJQT/DQ9moY4z1JpPSVjkmhY+pjH1zVmyxFoR7g4ZR4itT3ICQ2TEeVgZHMubIx1SkKNTwcKjJlnMRKTMXDJlQ1pTxVoTaPSHsr2RqnaIsQm+wM4L0Rrej28gRQOVIVaijuqhk7TWJlUoQuu0pGf6Qs1O9XqFvQN6Ju6IR0J0af73FVDINNWah3VHhMOlkexwiJjX0BjI5w3r2qmFKeslBDwf3BQ0QSKzFHUFSue1LqQn0MgJGOxjalVY9wNDYhLjHf+8kOx58L4G6H478TwF4Oxw+O1IW6h8PDvrOqnClFgmdRgwke5bhV3CwA1zteoErFVKcu1HDU/aXG5rUkcO5qMD3XKeMzFIR6cpU2SlUQapN6erjlMQ8DsJvlMQmxydycsQbIIbgrHgCwAMBiAHc6tLOrFJOqBFUQajgo1MTYaRIy9wJ4Omd+pziuhTO9y39Pc7xGlalTXRWhPtliO5/tAJxqaSxCXHAdgBU547pOGOnq8rgBQKdDW6dJLkPy9KrCRUp9AOPT+p6FsU4H0M/COCQMJnZitI944lGOxl0L4A4A6zP+zURAHenILrq4PeosBfBHAO9yZG+g5Er8zNH4wVAVoYa4P2wINd0eabFXYqFecwA8lfNvrg/gZmb8brpDoYZEfyQv1FVxfUAaz76jzTFMA9BDLM2HEBdcC+C5nHFdh7TNyPida/eHKSq1k8Pxg6BKQg0LmYrs4kJC5jkJy8tyexwAYB+Hc38EwPyM39fdH64wXoEzgv5ULFA1oZ7Uhn+5J2OnSeDcCOD5nCm6jpBoFDc9vcG/2SD56I+qCfXANiI2jnaczUVIuxhBXJMxRm+FXWcjMXbt/nD9tOCdGIQ66zGuHcrGVNsuwOTyxiXVYxmA+wBszLhy137cPLdHHdfuD6S+q45BqG+1PN67AexR8D0mBnu8xTmsAvCwxfEIuQrAupxVcH2IOKuF17h2f0xJ2UMQw4XNlb/YNil6qGh8230s2jf+vA2Wr4lUl00SGvdyxgpsb3mTkUVWtEd3XLs/RkpphySJ5S+Q7QIvZxWMIbcdO+16d0GqxUPyhJYlhKc7bgi7UFwuzdBwfyRbUS8Wob7W8nimqefxLb7WxF+/3aJt40u83eJ4hFyd45uG52iP7rjeoJyaatZwLEK9QNJTbdKq+8P2bvoGeVQlxAYb5Z56NWOsUXIm45IiQm1cJJsdzsVUBjzJ4fjeiMn5/lPL45kmmcObvKa3gyI211kej1SXzfJ0tizH7eF6N92q26OOxtNkktEfMQm17cemni1kGp5guePxkiYF3Qkpwiapc+HL7dFKtEd3XDcUMKGIwxzbUCcmoX5C6uza5JwmRWpsp4xPY/w0scg6ifbIEuqDAOzueLFbifbozkzH7o8eKaaUxxZ3aLtK1psbdIkYJu4RmyRf5YuosUFyDFblGHQdAbGkZAPb5Qruj+RKPcQm1NMd7EjzMhWniHvEFo8X9OcR0oiNcm6T9X0w4XgTHK/e9W18F127P/YHsJ9jG6rEJtRLHMRimtZEgzJ+bztl3HVbIlItVjbI2jWhp4Mdr0Y7Yuva/YHUDhVjTLm07T7oK5mHXRkHYG/LdijUxBbGN/1L6eaSRahujzoa7o/JKaWUx9jhxbg/Lrb8IZhDxcu6/L/t2GkTA/6g5TGJHV4AsNrDWo6Q8M8ymJjpH+e8b4iDs5XuzLbggjQ78iPsT+3vjJC2Y79xaEONGIW6/tfY5odsMg9N37x5ssOeaHFs8BAxaL5bw7wva0+wE6PniS+1+Fsbxy9PbOMPQKvY8DEb98d/O971Tk1FqGN9NLCd/IIumYonSyEbmzDJhdjCuDtuRmdHXuy0a7fHMkvnRBruj/dJtmL0xNrc1gTaX255/ibK41MODhHvkxhwQmxgGgNcmTOO6ek51vEq79Sgi0xR+jqea3/ZeF3j2I5zYhXq5+XEu9XCSq1gIj/Oc+A3426a2GLTa5XyOjsW5oynET/c08ETp0umpiDUMZ+KuvD7nm+5nX6nQswoqQ4vSgGmLGoS6UC25MgUWujFLNSzG3S0KIvNBBeIL2+x5TFJdVneoL6GKZq/K++NreiRwh+wmIV6jcSShgwbBBBbbHgtKqmzY1nOeMl34m6D6Ncm9oDwkJNINjMsj1hkZQM3Wt82uutXgf0k/DZaYhfqm3P6xIXA7fKoSogNFjeICTbF8gdylRsS9a46dqF+BcBNAcwjCxex3qSaGLfHPejseDHn6un2aM4kB2dQaqSQCx9i+NvGkkXVCcniyQb30zAplk8aY9bpqFjXKAWh/rXUawiJWy0mBRDyV3R2/C5nFc6IeaeoTLRdylMQ6lcbxJb6goeIxBZrm6RsRys+HjBZitvFOPFUygCGlFSyTmK8CbHBowBuyRkn+mgGZfpK/fnoSEWozWn4igDmAYntXhPAPEgaPIrOjrxeoTxELE6Ua5aKUG+SsokhwAYBxBarct0etTE9pZAYKcbhAEbGtmbJdEAIJBzuZYntJsQGC+SwPAtTw2I4V7kwjWqivBLqpFMS6jukVq5Pbgz5wybRMR/AYzmT5iFiefKqDL4U6oRTEuoQUrbp9iC2+FuB/s6OTVuNVxszQCIYSDlMP9QDMt65NtTzpZSEGp6FelWDx1RCijK/Qcq4iVzoxxVti6xDxc4AQ31fI9bGAXncLVlcb/Jge5bEdBNig/saVMrTcHs8DuBpT5/kcOlW4xKTKPRJySLuimkycJan684lNaHulF31pz3YZpILscUiAHdljlUbM1IiF1xjdpx/8vSJmvjw+x3b2ElS77uXSjYZoE+FFhmSmusDnvzEJob7tx7skjQxT4Zzcq5siuUuRFkskTn4wrh9HlGwnfVkYjZ713q89kxSFOp5Sh9yV2ZILDch7WIOxe9FZ0de/RoNt8f1Ilg+0cg2Hp/T//Eqz9e+FSkKNTy4IdjAltjioVyXQ23MARKx4JoQSjJodEfaNqfhwsOvnREERKpCrSmcS5sUzSGkCHPkqTALjd20b7dHHS33R15KeVCdy1MV6gXyQWswTR5XCWmXtdIgYOvEi9qY3hKp4JoQ3B51NHb2h+Y0Bb4uIyLEG6kKNRRTytnAlthirvxkcQyAHRVWOqRKlBrfrbyU8uUh5UWkLNQaN9zCQB4TSRrc1uBxv0pujzpa7o+8lPKrFWy3RMpC/YTCTcfdNLHFGon2WL/VeLUxJjLhRIWVDsntUUdjw2WSa8Zm/P7GULpHpSzUUPiQ2cCW2MLsph/MGWsCgG0UVjokt0cdrc1Q1qHiOgm99U7qQj3N4Q7hEcUDS5I+v0Vnx19zrlKj2H1obo86Wu6PiQB6Z/w+iOiP1IX6aYehc8FlL5FoeS43JK82ZhSAdylcWIhujzoaO/2hAI7N+P0cSen3SupCDYcx1SE+JpI4mSW9EbPQqjsd8v3s0/0RREp5FYR6hoM457kSq01Iu5jSA3eis+PZnHE02m2F6vaoo+X+MCnlgzJ+7z2lvNaJ0Y0ed1wXfyGEEPI3crW4CjtqQgiJGgo1IYQEDoWaEEICh0JNCCGBQ6EmhJDAoVATQkjgUKgJISRwKNSEEBI4FGpCCAkcCjUhhAQOhZoQQgKHQk0IIYFDoSaEkMChUBNCSOBQqAkhJHB6tTm9fgAuC/gSXwKwEcArAFZJyyPTnutJAKY/3asBzNEnprv1xcr2rwBwh4drvtKDzTw2AHhZ/u1FAKsBLJf7czGAhXLPEvIa7Qp1HwBnRrqUprPGY9KrzgjHHwDcH8C8NDndw+fX35NQx3afLpOu5Ob+vA/An2SDERqTAXzK4ZzWAHi30jW/QzYSLjkXwJ+Ljt+uUMdMTwBvkZ+Jch1PAbgJwE8A3FWBNdBo89SdE6Xd0WoPtmNiuPwc1WXO5inwNgC3APhlILvuHQHs73D8FxyO3Z0Bjq8FYqMw9FFvyUgAH3mth93feiJ+GEDfkCZoEdPd+lAPdvvITp4Ux3xm50gf0BUApgE4QTYdJGEo1PnsBeB/xF/4UQC9Q51oSXzsputoddZOGeNCmiBPgOYe/QKAoVVflFShUDdnGIBLAfxF0VemQVZrfC0OAbBbQmvpm10AfFV82BeKy4QkBIW6dfYGMAfAtwFsE8ukczgIwB6e5+DzD0Wq9JeDPXNI/vmE3XaVg0JdnPMkamFEbBPvQggi6dP1kjpGsL8G4GEAx1d9MVKAQl0OE8ZzD4D9Ipz7NuLb9M3usrMn7tgVwM0SQz6I6xwvFOryvEFCpWIT6+MA7BDAPED3hxpnyhnL2Ipcb3JQqNtjqMS0joxoziFFXExMwN8fC7tIUteHq74QMUKhbh+zs54dieAMCcxnOVh2+ESHPhJyaiJDalzzeKBQ2+EAABdFMM8JAcaDM6ZaHxMZchUTZeKBQm2Pj0l8cMiEKIoh+cyrhDkfuJpiHQcUanvUpJJgqGu6J4BxAcyjO30CiUKpIpMAXFL1RYgBCrVd3ibVxEIk5AgLRn/4w9S2+URVLz4WKNT2+UyABzW1wMUwhEzJKnMhD3XDhkJtn30AHBPYnA6V5IeQYaaiP3qIv/oNJWbwTCqLEDIUajecHdh8YnAtTGXImFeGiFgX1YS5AJYmthbBQaF2w4nSpiwETGGe0yJYM1Nr+eAA5lFljgDwoYLXb5oZTK/6wrkmhg4vzxZ8vOoliRSDPVYP21Y6c9zkyX5XzB+NgQHMoxVM+OAfw59m0nwdwEz53rXCBqkl8h4Ao6u+eK6IQagvB/Dlku/dQ2KbTfjXsZbn1Yz3BCLUMfUKNJ/Tv0TadNhUqvt1C68bJN+74VJ6YFRgSUhmfhcA+ECB9/xFeg1+iyUB3JB6z8TH5OdKKUhztXRu0SCEx/idAbw3gHm0yvbyBHB9HNPdAlNN8eMl3tdbDqDHymbiaADbOZxnK5g/7v8F4KEC7/m1lP890t+006VKPup7JOHjXiV7+yrZacSkCDPPqhb9sUF2pD8AcIo0i53sqVN7HaML5xd8j9kQXQtgvbtpVZeqHSaajsYnAVilYKt/yXAnm8RYR+O4ivf+M26fn0rbtyMVNxbdObnE0+fdHuebNFWM+lgq3S808CnU+0Z6uNOLKeV/x9Q7PxDAJz347WtyXlCEBeK26lSea/JUNTzvh0qPaDsq2Mgj5qp0MR2AumazHNId5CFe+Uw5N2iVzbKrXqk8z+SpqlC/oPSI1kfBRhY9HNccmStfSFe8U/HQNxY6ZHf9mOJ8jfvufQXfswjAzx3Np7JUOeHlCQUbRXYjNjnKcfPdWQqRGaxTvTVLxG/9tKLNon/wl0kECN0fFqmyUC9XsLFawUYWrlPGZygI9WSmlGeyREIYtaIrjijhwltYIGGGtECVhVrDLbFRwUZ3BsiJvSsekEOjxQDudGhnVykmRbbGuJ4+q7QutRJFxpY7vjcqR5WFeoiCjWUKNrpzivgWXdG1rsM0x9fCOtX5XAxgvpKtolm9z3iOA0+OKgv1ngo2NH2JdVwnjHR1edzg2Bd5msd6LaGzSXofanB4QRuvShIPsURVhXqINKR1yWoPtXpHOk7hrbs96ix1XERpoPhjSTa3ymfimhElcgKekx9igaoK9TkK197hePwsXB/Azcz4nesSl4z+aMylSnYOLPj6FxVdM8lTRaEeqXQQ46Ncp2tRm5HxO9fuD1NUaieH48fOTEk0cU3R2jUvA3i86h+OLaom1EMkGH+Qgq3fKNjoygFShc0Vj+TskFy7P0xK+RkOx4+dFUoRFkXPdNZKmB6xQJWE2hT7uU+p/sWzHnbUriMkGsVNu3Z/MPqjMX9QsFFGqBc5mkvlSFWoTSzxGyX+84sA5gH4hWKD12lyKq9Fb4VdZyMxdu3+cP20EDt/Vpj/yIKv38zGt/aIQai/JCJQ5GeNJGT8CsBXAOyvOF9j/zJFe1Dw4+a5Peq4dn+Au+qGaER+lCkwtlp5w5IsbG5rn9kAHlW26foQcVYLr3Ht/pjC+zWXxQo2epYQ61elABppE974djG7h/9QtmkKP413bCMr2qM7rt0f5tH7MIfjx8w6pdKiRTNejfvjJUdzqRQUart8v2CfORuc7rih6EI5hG2GhvuDMdX5vKxgo2iWaKe0GiNtQqG2x5MA/t2DXZ/RHt1x7f44FUA/xzZiRUOoi24INkfaUT44KNR22Ci7Pe3HvFHSW88lRYR6huPkiwHS85JsjY9Kjc2osVStHSjUdvg3pVjW7rjeTbfq9qhjqgXe7nZKjP7IQaNJRdEIjh58ArIDhbp9vgnge55suxatVqI9uuO6oYAJRRzm2EaMaNRXX1PiPT0dzKNyUKjb4wIAn/Fk2zQ73d2xjVaiPbrjuvZED6aUb4VJs99Zwc66gq83iVg7OJpLpaBQl8M8An4UwOc8zsF1BMSSkg1slyu4P9ilfEveoPRdLhoC2I+uDztQqIuzSA7wtLMPu2JO3yc4tnF9G3HRrt0fJtN0P8c2YkKjCcbKEgeWGl2UKgGFunXMLvoSAG8DcJfnuRwPYLBjG+2IrUbpTR4qvs5YBRtF28ptU6I+CMmBQt0aN0phoH+Vgui+CdXtUUfD/TGZ9+/fOUjBxmMFX29cHm9yNJfKwRs9n1cA/FDKop4UUA+4IVKy1SWzLaSDu3Z/jHDcdiwW+iutw8MFX99P4vzJlpSKd6dQb83/AThXhODcAJt0TpTTdJfYEFm6P3Qwf7S3VbBUtDSCSU7a24Jd1/d6V1yWYqhTKimOQr01P5ed9OrQJia4dnsss1SzQ8P98T4RhCrzEaVrv6fg620JtdmZa3WiD/bws1cAc2jGIqmjYThY4S+sqV/9U6VqZEXZU+HgyNS1ft7SWK6/YOax/2QA1zi2EypjALxHYW4rS/Q/fJPF7+rIEj7yMmj41FeVeVMMO+or5WY0P5cr2DP9FM9XsFMGjfjhnpKObONHI1uuyu6PbynZKVoewUQkjbNo38bOvBXeqmBjRZk3xeb6OL9kGmtRPqjcFaYVahLpQLbkSDlPqBomO/NwpWv+ZcHXmxT/Iyza1wg/NBziePxXpJdkYWITavPX6CIFO2ZdLlawU4TDFHs+xkSPFv+APZjQNe+m9HRZ51cFX2+Eel+L9o+2OFYe+yh8v0o3+43xMPE7Sk0zD5Oi/KHACId8Wlkb1webWgyWuP6BSvZMctdTBV7fX+K6bUZQjFWoa6PhVizdoi9GoX5JDvw0uFDxxLkRfaVoPslmP4l3b8Sfyz52BsQg2d3a3K02o+hB7S4SjWObjzu8RrOuH3I4fp3SB6KxhuddoXQKvKunri3dOUlxBxUrzXbVc+UnVkbJ7lbLXwvpzvKzgu95q6PznX8CsIeDcSEbP4163qXvv1iF2mT3fFbJ1qcBvFHJVh50ezRnUpPax49KMlOMGB98B4C3KM/92oKhmkMB/KOjsF8TQXSVg/DcYwF8zPKYedxb9o0xJ7zMbLMeRav0VTrAzGOYFMsnzdfpqAb/vk7cH6EmMmVh4qRvAfATpR1fd75b8PXjRKhdcZCE69pqRjBOnhg0dHBFFV0fkFoUWm6JCQq9CfM4g10yWqZZ1uZDERwq9pC08NnSBu1YT/MwIXnzC7ze/CE5QSG7b5IcprZrx9wrtym6FItGzmxB7CnkcwD8QsnWJZ7Wy3XKeEqYLMXtGlzPk4G6P3aTCKMfAVgq9/R4j41hzSbo8wXfs4+jQ8QsTJnfRwCcV6KEgInm+q24UTSbGtzSzptjSCFvxmdkB+L6ph4tRZq+79hOV1qJZiCvY9xUp8jjcRZGgOZJSvRQy+tmPqcvN3nNNjLHftI6y6RGv9mTW6MR02SdimCubUfFOZod9bcBfF12q3fIE8Aiie55VUIFd5ZDyLGiE7spzrHOunY3lCkI9QPyxTxbwdbXAExX9HPyELE4UxsIteEJcSuca9nu/gFms5ZhTUmXohH29UplA7qyrURFnaRstwiz261jn0r1vC+VaLxZhh3FlgbGLz1FyVZKHN6ks8gz4pt0XYI1Vr5QMMGlzuoSqeZV4YftXmcqQm06klyqZOtjSmFSpobFcAU7qdFKTZQFABZWfaEyuLPN75HWdzAm5otPvC1Sqkf9n0ouiV4lwpbKwEPE8jRLB14ikQPkdV6QiIpNbazJbYnVVLHBRRa6JSUl1KvlYEGDYxzHiw6QCAZSjr2lx2Ue5jDxVro/tuCcdooGCZ0Blwj2wQOSNNQ2qXV4uVR2Sxp8x+HBySnKoUMp0uwgdknkKeU2MSnUN1gab3qJiJFU+ZStzUAKUR9dMfVevwjgxwq2dpdCMRc6GFvD7WE6djytYCeL4dKtxiUmUeiTDZqJPi3uj3d4WoNQ+JnlImed0q3/93EvS9vc0G6SS1dqnRjdyH/SLDZ5UNnWMgX4SgvxqV3pIQ1pNSqMrRHBsVl21UQsLFaICzfpuH9ybCMPEx9+v4Kd4xtEItTEPVK6/kIC/FyqMq53cClXVfic5XkpTlVUF3K1OMXmtpsVCzaZLLgLLI85RUGklyjVScljvmSWuaaRUHRKA97feVsFv/zCoUhDnjZ9PbH55lzbNfNT7UJ+s6SXa3Cm5dKTGruQ622cRFuYg2vGN8n6W640j9C4RtK9XYk05El7agUPbE1nqFm2B01VqCGOfA1q8uHY2AUfoNTIMwRxmq5gY9smDRfWSePWVxTmEgoXyObCpUjX+Z2UeKgKJpLoEy6uNWWhvsfiSXYzDrSURaixm/bt9qij5f5oFv3xrHzBUmeNRBN9Tvlp6iKlw33fGL05rc049FxSFmrITelk4TL4RolKXl3pLZEKrgnB7VFHY2d/aJOmpavk4Ctl7pantZmertF0Z5mR8PreIzXj17gykLpQP6pY7W5EidKQXTlGqfpYSD5ZDfdHs5TyjVL3WaNhsjbrxfVwiFLrujw2yWeQ4nnAHBHpF1waSV2oIZlSLyvZOq+NMopVcnvU0XJ/NEspN1mtNwX0pGGDG6VG9DcVnyobYf5oTFQqv6DF1QCOdi3SqIhQL5O6tRpsU9KWiUw4UWF+Ibk96mjssvZsEpmzVtwfvgr12+RuEY+TpKRrSGyWzcxZkR/gmkPoDyoeylZCqCEHGiuUbI1v0rsviwki8q4J8dFTw/2BJoeKmyQB5+GId9UmeuUf5GA79Ca+5o/iO8XlFBt3Si/LH2jOuypCvUa5WMx3C6bnazQICM3tUUfL/TGxSQfrDdLZJC/lPERMMfr/lYYFh9pMWVbgQWku+wkN14EFnpFD0XdJmVxVqiLUkBtaqwaxSR/95xZfO0o+fNeE6Paoo7HTH9qkUewG2d1rNKBohxelPoeJD98JwIeV0vFdsElchbtLLkKIa79SMp1Ny7QrfH2HqiTU69uMyijKV1rslKxVDyHkE/cQ3B+bZacUmujVS7KaYmMHA9hBng5ukL6AKbBSUs53lYQcLTdlI8yT3ocA7CKht2t9TibFokyNqEkRnka1im1yeQs768dkR+GSJfIlCNn/akRyL8c21kuz00YNJowIXud4HnXWyaHacyJWK6Qm9ONyEHi/FOiqGqZ88AnSyMA0pN1W6foXS/r3NZ7857nfz3aFmhBCXGKSyI6UXpiHSeXFnpbsmSp3dwG4XdpldXj+JCnUhJAk6CtivY/kLIySRDHjZhwsh/i1LqL3kjyxmKeVpXJO9XigTysUakIICZxK1aMmhJCkoFATQkjgUKgJISRwKNSEEBI4FGpCCAkcCjUhhAQOhZoQQgKHQk0IIYFDoSaEkMBpVjM5pdZEhBASJdxRE0JI4FCoCSEkcCjUhBASOBRqQggJHAo1IYQEDoWaEEJCBsD/A0LnXjF6PpSQAAAAAElFTkSuQmCC" />
    </svg>

  );
};




const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallCentered() {
  return (
    <Box
      bg={useColorModeValue('#FFE4DF', '#202023')}
    >
      <ScrollAnimation style={{ margin: '0 !important' }} animateIn="fadeInUp" delay={300} animateOnce={true}>
        <Box

          padding='3rem 20px'
          color={useColorModeValue('gray.700', 'gray.200')}>
          <Stack direction={['column', 'row']} justifyContent="center">
            <Box>
              <Container
                height='90px'

                fontSize="16px"
                fontWeight="600"
                borderTopWidth={1}
                borderBottomWidth={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('#cecece', 'gray.700')}
                as={Stack}
                maxW={'8xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>

                <Stack direction={'row'} spacing={6}>
                  <Flex direction={['column', 'row']} mx="0px !important" p="20px" borderRightWidth={1}>
                    <Box align="center" pr={{ base: "0px", sm: "0px", md: "10px", lg: "10px" }}>
                      <SocialButton label={'Github'} href={'https://github.com/michaelradu'}>
                        <FaGithub />
                      </SocialButton>
                    </Box>
                    <Text alignSelf="center">GitHub</Text>
                  </Flex>
                  <Flex direction={['column', 'row']} mx="0px !important" p="20px" borderRightWidth={1}>
                    <Box align="center" pr={{ base: "0px", sm: "0px", md: "10px", lg: "10px" }}>
                      <SocialButton label={'YouTube'} href={'#'}>
                        <FaYoutube />
                      </SocialButton>
                    </Box>
                    <Text alignSelf="center">YouTube</Text>
                  </Flex>
                  <Flex direction={['column', 'row']} mx="0px !important" p="20px">
                    <Box align="center" pr={{ base: "0px", sm: "0px", md: "10px", lg: "10px" }}>
                      <SocialButton label={'Instagram'} href={'#'}>
                        <FaInstagram />
                      </SocialButton>
                    </Box>
                    <Text alignSelf="center">Instagram</Text>
                  </Flex>
                </Stack>
              </Container>
            </Box>


            <Box>
              <Container
                height='90px'

                fontSize={{ base: '20px', lg: "24px" }}
                direction={['column', "row"]}
                as={Stack}
                maxW={'8xl'}
                py={4}
                spacing={4}
                justifyContent={'center'}
                align={'center'}>
                <NextLink href="/">
                  <div className="cursorHover">
                    <Logo alt="Michael Radu Logo" />
                  </div>
                </NextLink>

              </Container>
            </Box>
            <Box>
              <Container
                height={{ base: '120px', sm: '120px', md: '90px', lg: '90px' }}
                fontSize="16px"
                fontWeight="600"
                borderTopWidth={1}
                borderBottomWidth={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('#cecece', 'gray.700')}
                as={Stack}
                maxW={'8xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>

                <Stack direction={['column', 'row']} spacing={6}>
                  <Flex mx="0px !important" p="20px" borderRightWidth={1}>

                    <Text alignSelf="center"
                      fontSize={{ base: "14px", sm: "14px", md: "16px", lg: "16px" }}
                    >&copy; {new Date().getFullYear()} Michael Radu.</Text>

                  </Flex>
                  <Flex mx="0px !important" p="20px" borderRightWidth={1}>
                    <Link alignSelf="center" href={'mailto:miihairadu@gmail.com'}>miihairadu@gmail.com</Link>
                  </Flex>

                </Stack>
              </Container>
            </Box>
          </Stack>
        </Box>
      </ScrollAnimation>
    </Box>
  );
}