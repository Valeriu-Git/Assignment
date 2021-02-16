import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatSelect } from '@angular/material/select';
import { OptionsInterface } from '../../_models/options.interface';
import { romanianPhoneNumberValidator } from '../validators/romanian-phone-number.validator';
import { dateValidator } from '../validators/date-validator';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { LoadingService } from '../../_services/loading.service';
import { RegisterDtoInterface } from '../../_models/dto/register-dto.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register-ui',
  templateUrl: './register-ui.component.html',
  styleUrls: ['./register-ui.component.scss'],
})
export class RegisterUiComponent implements OnInit, OnDestroy {
  public isPopupVisible = false;
  public unsubscriber = new Subject<void>();
  public formGroup: FormGroup;
  public searchFormControl: FormControl;
  @ViewChild('select') public selectRef: MatSelect;
  public options: OptionsInterface[];
  public dropdownOptions: OptionsInterface[];
  public selectedId: number;
  constructor(
    private formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    private loadingService: LoadingService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getData();
    this.instantiateFormElements();
    this.initializeListeners();
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }

  public onSubmitForm(): void {
    console.log(this.formGroup);
    if (this.selectedId && this.formGroup.valid) {
      const registerDto: RegisterDtoInterface = {
        dataNasterii: this.formGroup.get('dateOfBirth').value,
        departament: this.selectedId,
        numarTelefon: this.formGroup.get('phoneNumber').value,
        nume: this.formGroup.get('firstName').value,
        prenume: this.formGroup.get('lastName').value,
      };
      this.loadingService.showSpinner();

      this.http
        .post('http://doc.footballconnect.ro/dropdown/submit.php', registerDto)
        .subscribe(
          () => {
            this.loadingService.hideSpinner();
          },
          () => {
            this.loadingService.hideSpinner();
          }
        );
    }
  }

  public onSelectionChange(): void {
    const selectedOption = this.selectRef.value as OptionsInterface;
    this.selectedId = selectedOption.id;
    console.log(this.selectedId);
  }

  public onCheckboxChange(): void {
    console.log(this.formGroup.get('gdpr').value);
  }

  public onClosePopup(): void {
    this.isPopupVisible = false;
  }

  public onMoreDetailsClick(): void {
    this.isPopupVisible = true;
  }

  private instantiateFormElements(): void {
    this.searchFormControl = new FormControl('');
    this.formGroup = this.formBuilder.group({
      lastName: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      dateOfBirth: [null, [Validators.required, dateValidator]],
      phoneNumber: [null, [Validators.required, romanianPhoneNumberValidator]],
      gdpr: [false],
    });
  }

  private getData(): void {
    this.activeRoute.data.subscribe((data) => {
      this.options = data.options;
      this.dropdownOptions = [...this.options];
    });
  }

  private initializeListeners(): void {
    this.searchFormControl.valueChanges
      .pipe(takeUntil(this.unsubscriber), debounceTime(500))
      .subscribe((data: string) => {
        console.log(data);
        if (!data) {
          this.dropdownOptions = [...this.options];
        } else {
          this.dropdownOptions = this.options.filter((option) =>
            option.denumire.toLowerCase().includes(data.toLowerCase())
          );
        }
      });
  }
}
