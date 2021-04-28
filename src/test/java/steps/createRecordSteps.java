package steps;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import java.net.URI;
import java.net.URISyntaxException;

public class createRecordSteps {

        private WebDriver driver;
        private JavascriptExecutor jse;
        private String firstRecord;
        final private String firstRecordValue = "sample test 1";

        @Before
        public void before() {
            System.setProperty("webdriver.chrome.driver",
                    "Setup\\Drivers\\chromedriver.exe");
            driver = new ChromeDriver();
            jse = (JavascriptExecutor) driver;
        }

        @Given("^User logs into the application using valid username and password$")
        public void userLoginToTheApplicationUsingTheCredentials() {
            driver.get("https://stirling.she-development.net/automation");
            driver.findElement(By.id("username")).sendKeys("KeerthanaR");
            driver.findElement(By.id("password")).sendKeys("KeerthanaR1234^");
            driver.findElement(By.id("login")).click();
        }

        @And("^navigate to the module$")
        public void navigateToTheModule() {
            driver.findElement(By.xpath("//*[@id=\"main-content\"]/div[2]/div[2]/div[2]/div/ul/li[1]/a")).click();

        }

        @And("^hover over 'Environment' and select 'release To Water'$")
        public void hoverOverEnvironmentAndSelectReleaseToWater() {
            Actions action = new Actions(driver);
            action.moveToElement(driver.findElement(By.xpath("//*[@id=\"main-content\"]/div[2]/div[2]/div[2]/div/ul/li[1]/ul/li[9]/a[1]"))).perform();
            driver.findElement(By.xpath("//*[@id=\"main-content\"]/div[2]/div[2]/div[2]/div/ul/li[1]/ul/li[9]/ul/li[3]/a[1]")).click();
        }

        @When("^user clicks on new record button and enter sample date and description fields$")
        public void userClicksOnNewRecordButtonAndEnterSampleDateAndDescriptionFields() throws InterruptedException {
            driver.findElement(By.xpath("//*[@id=\"site-wrapper\"]/section/a")).click();
            driver.findElement(By.id("SheReleaseToWater_Description")).sendKeys(firstRecordValue);
            jse.executeScript("window.scrollBy(0,500)");
            Thread.sleep(2000);
            jse.executeScript("window.scrollTo(0, document.body.scrollHeight)");
            driver.findElement(By.id("SheReleaseToWater_SampleDate")).sendKeys("23/08/2021");


        }

        @And("^clicks on Click Save and Close button$")
        public void clicksOnClickSaveAndCloseButton() throws InterruptedException {
            Thread.sleep(3000);
            driver.findElement(By.xpath("//button[contains(text(),'Close')]")).click();
        }

        @And("^user creates another record using different date and description$")
        public void userCreatsAnotherRecordUsingDifferentDateAndDescription() throws InterruptedException {
            Thread.sleep(3000);
            driver.findElement(By.xpath("//*[@id=\"site-wrapper\"]/section/a/i")).click();
            driver.findElement(By.id("SheReleaseToWater_Description")).sendKeys("sample test 2");
            jse.executeScript("window.scrollBy(0,500)");
            Thread.sleep(2000);
            jse.executeScript("window.scrollTo(0, document.body.scrollHeight)");
            driver.findElement(By.id("SheReleaseToWater_SampleDate")).sendKeys("12/01/2023");
            Thread.sleep(3000);
            driver.findElement(By.xpath("//button[contains(text(),'Close')]")).click();

        }

        @When("^user navigates to the first record$")
        public void userNavigatesToSettingsForTheFirstRecord() throws URISyntaxException, InterruptedException {
            jse.executeScript("window.scrollBy(0,500)");
            Thread.sleep(2000);
            jse.executeScript("window.scrollTo(0, document.body.scrollHeight)");
            WebElement m = driver.findElement(By.xpath("//a[@title='" + firstRecordValue + "']"));
            URI val = new URI(m.getAttribute("href"));
            String path = val.getPath();
            String idStr = path.substring(path.lastIndexOf('t') + 2);
            String firstRecordWith0 = idStr;
            firstRecord = firstRecordWith0.substring(0, firstRecordWith0.length() - 2);

        }

        @And("^delete the record$")
        public void clicksOnDelete() throws InterruptedException {
            driver.findElement(By.id("manageRecord" + firstRecord )).click();
            driver.findElement(By.id("cogDelete" + firstRecord)).click();
            Thread.sleep(3000);
            driver.findElement(By.cssSelector("#full_width > div.ui-dialog.ui-corner-all.ui-widget.ui-widget-content.ui-front.ui-dialog-buttons.ui-draggable.ui-resizable > div.ui-dialog-buttonpane.ui-widget-content.ui-helper-clearfix > div > button:nth-child(1)")).click();


        }

        @Then("^validate the first record doesn't exist anymore before logging out$")
        public void theRecordGetsDeleted() {
            driver.findElement(By.xpath("//*[@id=\"uservoice-activation\"]/a/div/div")).click();
            driver.findElement(By.xpath("//*[@id=\"uservoice-activation\"]/ul/li[4]/a")).click();
            Assert.assertEquals("Logout",driver.findElement(By.xpath("//*[@id=\"ng-app\"]/body/div/div/div[2]/div/div[1]/h3")).getText());
        }


        @After
        public void close() {
         driver.close();
        }


    }



