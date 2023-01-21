const pl = {
  loader: {
    pleaseWait: "Proszę poczekaj jeszcze chwilkę",
    optimising: "Optymalizujemy wszystko dla Ciebie",
  },
  menu: {
    offers: "Oferty",
    messages: "Wiadomości",
    myOffers: "Moje oferty",
    profile: "Profil",
    settings: "Ustawienia",
    logout: "Wyloguj",
  },
  loginRegisterWrapper: {
    title: "Nowe potężne narzędzie do znalezienia wymarzonej pracy.",
  },
  login: {
    login: "Zaloguj się",
    noAccount: "Nie posiadasz jeszcze konta?",
    register: "Zarejestruj się",
    email: "E-mail",
    emailPlaceholder: "Twój e-mail",
    password: "Hasło",
    errors: {
      fieldRequired: "{{ field }} jest wymagane!",
      wrongEmail: "Niepoprawny email!",
      somethingWentWrong: "Coś poszło nie tak, spróbuj ponownie",
    },
  },
  register: {
    register: "Zarejestruj się",
    firstName: "Imię",
    firstNamePlaceholder: "Twoje imię",
    lastName: "Nazwisko",
    lastNamePlaceholder: "Twoje nazwisko",
    password: "Hasło",
    confirmPassword: "Potwierdź hasło",
    role: "Rola",
    rolePlaceholder: "Wybierz rolę",
    email: "E-mail",
    emailPlaceholder: "Twój e-mail",
    acceptTerms: "Akceptuję warunki",
    haveAccount: "Posiadasz konto?",
    login: "Zaloguj się",
    errors: {
      fieldRequired: "{{ field }} jest wymagane!",
      tooWeakPassword:
        "Przynajmniej 8 znaków w tym duża litera, cyfra oraz znak specjalny",
      notTheSamePassword: "Hasło nie jest identyczne!",
      acceptTerms: "Należy zaakceptować warunki!",
      wrongEmail: "Niepoprawny email!",
      accountExists: "Konto na podany email istnieje!",
      somethingWentWrong: "Coś poszło nie tak, spróbuj ponownie",
    },
  },
  roles: {
    candidate: "Kandydat",
    recruiter: "Rekruter",
  },
  allOffers: {
    search: "Szukaj oferty",
    location: "Lokalizacja",
    recently: "Ostatnio dodane",
    salary: "Z zarobkami",
    all: "Wszystkie oferty",
    new: "Nowe",
    notProvided: "Nie podano",
    clear: "Wyczyść filtr",
  },
  offer: {
    goBack: "Wróć do ofert",
    new: "Nowe",
    description: "Opis",
    apply: "Aplikuj",
    message: "Wiadomość",
    added: "Dodano",
    notProvided: "Nie podano",
    successTitle: "Złożyłeś aplikację!",
    goToMyOffers: "Idź do moich ofert",
  },
  myOffers: {
    recruiter: {
      createdByYou: "Stworzone przez Ciebie",
      posted: "Utworzono",
      addNew: "Dodaj nową ofertę",
      goBack: "Wróć do moich ofert",
      title: "Tytuł",
      titlePlaceholder: "Tytuł oferty",
      companyName: "Nazwa firmy",
      location: "Lokalizacja",
      locationPlaceholder: "Lokalizacja firmy",
      experience: "Potrzebne dośwideczenie",
      experiencePlaceholder: "1+ lat",
      bottomPayrange: "Dolna granica wynagrodzenia",
      topPayrange: "Górna granica wynagrodzenia",
      currency: "Waluta",
      description: "Opis",
      descriptionPlaceholder: "Więcej detali na temat tej oferty",
      post: "Opublikuj",
      cancel: "Odrzuć",
      update: "Aktualizuj",
      submit: "Zatwierdź",
      accept: "Akceptuj",
      reject: "Odrzuć",
      message: "Napisz",
      statuses: {
        rejected: "Odrzucono",
        accepted: "Zaakceptowano",
      },
      emptyOffers: "Nie opublikowałeś żadnych ofert",
      errors: {
        fieldRequired: "{{ field }} jest wymagane!",
      },
    },
    candidate: {
      didntApply: "Nie zaaplikowałeś na oferty",
      startSearching: "Zacznij szukać",
      applied: "Zaaplikowano ({{ number }})",
      searchAndApply: "Szukaj i zaaplikuj na więcej ofert",
      statuses: {
        applied: "Zaaplikowano",
        rejected: "Odrzucono",
        accepted: "Zaakceptowano",
      },
    },
  },
  messages: {
    emptyInbox: "Brak wiadomości",
    newMessage: "Nowa wiadomość",
    searchConvs: "Wyszukaj konwersacje",
    searchUsers: "Do",
    convNotFound: "Nie znaleziono konwersacji!",
  },
  settings: {
    app: "Aplikacja",
    language: "Język",
    account: "Konto",
    changePassword: "Zmień hasło",
    confirmPassword: "Potwierdź hasło",
    password: "Hasło",
    changeEmail: "Zmień e-mail",
    email: "E-mail",
    deactivate: "Dezaktywuj i usuń konto",
    changeAccountData: "Zmień dane konta",
    confirm: "Potwierdzam",
    cancel: "Odrzuć",
    change: "Zmień",
    toConfirm:
      "Aby potwierdzić operację, wprowadź aktualne hasło do Twojego konta",
    alert:
      "Operacja jest nieodwracalna, jednak będziesz mógł utworzyć nowe konto na ten sam email",
    errorAlert: "Coś poszło nie tak, spróbuj ponownie",
    errors: {
      tooWeakPassword:
        "Przynajmniej 8 znaków w tym duża litera, cyfra oraz znak specjalny",
      notTheSamePassword: "Hasło nie jest identyczne!",
      wrongEmail: "Niepoprawny email!",
    },
  },
  languages: {
    en: "Angielski",
    pl: "Polski",
  },
  profile: {
    tabs: {
      about: "Ogólnie",
      experience: "Doświadczenie",
      education: "Edukacja",
      additional: "Dodatkowe",
    },
    common: {
      uploadAvatar: "Dodaj avatar",
      firstName: "Imię",
      lastName: "Nazwisko",
      email: "E-mail",
      phoneNumber: "Numer telefonu",
      country: "Państwo",
      linkedin: "LinkedIn",
      link: "Link",
    },
    candidate: {
      portfolio: "Portfolio",
      bio: "Bio",
      bioPlaceholder: "Więcej szczegółów o Tobie",
      jobTitle: "Nazwa stanowiska",
      title: "Tytuł",
      company: "Firma",
      country: "Państwo",
      from: "Od",
      to: "Do",
      mmYyyy: "MM/RRRR",
      details: "Szczegóły",
      detailsPlaceholder: "Więcej szczegółów",
      addNewExperience: "Dodaj nową sekcje z doświadczeniem",
      school: "Szkoła",
      degree: "Stopień",
      name: "Nazwa",
      addNewEducation: "Dodaj nową sekcje z edukacją",
      additionalTitle: "Dodatkowy tytuł/nazwa",
      addNewAdditional: "Dodaj nową sekcję dodatkową",
    },
    recruiter: {
      company: "Firma",
    },
    goBack: "Powrót",
    errors: {
      fieldRequired: "{{ field }} jest wymagane!",
      wrongEmail: "Niepoprawny email!",
      wrongUrl: "Niepoprawny format URL!",
    },
    edit: "Edytuj profil",
    save: "Zapisz",
    view: "Widok",
  },
};

export default pl;
