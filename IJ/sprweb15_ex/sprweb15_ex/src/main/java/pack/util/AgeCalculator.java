package pack.util;

import java.time.LocalDate;
import java.time.Period;

public final class AgeCalculator {
    private AgeCalculator() {}
    
    public static Integer calculateAge(String jumin) {
        if (jumin == null || jumin.length() < 14) return null;

        try {
            int birthYear = Integer.parseInt(jumin.substring(0, 2));
            int birthMonth = Integer.parseInt(jumin.substring(2, 4));
            int birthDay = Integer.parseInt(jumin.substring(4, 6));
            char genderCode = jumin.charAt(7);

            int baseYear = (genderCode == '3' || genderCode == '4') ? 2000 : 1900;
            int fullBirthYear = baseYear + birthYear;

            LocalDate today = LocalDate.now();
            LocalDate birthDate = LocalDate.of(fullBirthYear, birthMonth, birthDay);
            return Period.between(birthDate, today).getYears();
        } catch (Exception e) {
            return null;
        }
    }
}